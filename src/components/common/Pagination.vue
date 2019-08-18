<template>
  <div class="d-flex justify-content-center mt-5 mb-5">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="currentPage === 1 ? 'disabled' : ''">
          <a class="page-link cursor-pointer" @click="goPrevious" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          v-for="page in pages"
          :key="page"
          class="page-item"
          :class="page === currentPage ? 'active' : ''"
        >
          <a class="page-link cursor-pointer" @click="$emit('page-change', page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="currentPage === pagesCount ? 'disabled' : ''">
          <a class="page-link cursor-pointer" @click="goNext" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    totalCount: Number,
    pageSize: Number,
    currentPage: Number
  },
  data() {
    return {
      pagesCount: 0
    };
  },
  computed: {
    pages() {
      let pageArray = [];
      this.pagesCount = Math.ceil(this.totalCount / this.pageSize);
      for (let i = 1; i <= this.pagesCount; i++) {
        pageArray.push(i);
      }
      return pageArray;
    }
  },
  methods: {
    goPrevious() {
      if (this.currentPage > 1) {
        const previousPage = this.currentPage - 1;
        this.$emit("page-change", previousPage);
      }
    },
    goNext() {
      if (this.currentPage < this.pagesCount) {
        const nextPage = this.currentPage + 1;
        this.$emit("page-change", nextPage);
      }
    }
  }
};
</script>