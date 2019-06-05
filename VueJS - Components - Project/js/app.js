//Vue Components
Vue.component("card", {
  props: ["title", "content"],
  data() {
    return {
        claps : 0
    }
  },
  template: `
    <div class="card mb-2">
        <div class="card-body">
            <div class="card-title">
                <b>{{ title }}</b>
            </div><hr>
            <div class="card-text">
                {{ content }}
            </div>
            <div class="text-center text-muted display-4">{{ claps }}</div>
                <button @click="clapForArticle" class="btn btn-info mt-2">Clap for me</button>
                <button @click="deleteArticle" class="btn btn-danger mt-2">Delete</button>
        </div>
    </div>
    `,
    methods : {
        deleteArticle() {
            this.$emit('delete-article',this.title);
        },
        clapForArticle() {
            this.claps++;
        }
    }
});

new Vue({
  el: "#app",
  data: {
    articles: [
      {
        title: "Build fullstack applications with laravel and vuejs",
        content:
          "Repulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond. "
      },
      {
        title: "Where does it come from?",
        content:
          "Denote simple fat denied add worthy little use. As some he so high down am week. Conduct esteems by cottage to pasture we winding. On assistance he cultivated considered frequently. Person how having tended direct own day man. Saw sufficient indulgence one own you inquietude sympathize. "
      },
      {
        title: "1914 translation by G.R Burman",
        content:
          "On projection apartments unsatiable so if he entreaties appearance. Rose you wife how set lady half wish. Hard sing an in true felt. Welcomed stronger if steepest ecstatic an suitable finished of oh. Entered at excited at forming between so produce. Chicken unknown besides attacks gay compact out you. Continuing no simplicity no favourable on reasonably melancholy estimating. Own hence views two ask right whole ten seems. What near kept met call old west dine. Our announcing sufficient why pianoforte."
      }
    ]
  },
  methods : {
    removeArticle(event) {
        this.articles = this.articles.filter(article => article.title !== event);
    }
  },
});
