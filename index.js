new Vue({
	el : '#app',
	data : {
		currencies : {},
		amount : 0,
		from : 'EUR',
		to : 'USD',
		toCurrecySymbol : '',
		convertRate : 0,
		loading : false,
	},
	created() {
		this.getCurrencies();
	},
	computed : {
		formattedCurrencies() {
			return Object.values(this.currencies);
		},
		disabled() {
			if(this.amount === 0 || !this.amount || this.loading){
				return true;
			}
		},
		calculateFinalRate(){
			return Number(this.amount * this.convertRate).toFixed(2);
		}
	},
	methods : {
		getCurrencies(){
			const currencies = localStorage.getItem('currencies')

			if(currencies){
				this.currencies = JSON.parse(currencies);
				return;
			}
			axios.get('https://free.currconv.com/api/v7/currencies?apiKey=e0e936ecbc42a7db36c6')
			.then(response => {
				this.currencies = response.data.results;
				localStorage.setItem('currencies',JSON.stringify(response.data.results))
			})
		},
		convertCurrency() {
			const key = `${this.from}_${this.to}`;
			this.loading = true;
			const symbol = `${this.to}`;
			axios.get(`http://free.currconv.com/api/v7/convert?q=${key}&compact=y&apiKey=e0e936ecbc42a7db36c6`)
			.then(response => {
				this.loading = false;
				this.convertRate = response.data[key].val;
				this.toCurrecySymbol = this.currencies[symbol].currencySymbol;
			})
		}
	},
	watch: {
		from() {
			this.convertRate = 0;
		},
		to() {
			this.convertRate = 0;
		}
	}
})