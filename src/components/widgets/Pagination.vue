<template lang="">
	<ul class="pagination align-items-center justify-content-center pb-3">
		<li
			v-if="pages.total_pages > 0"
			class="page-item shadow-sm"
			:class="{ disabled: pages.has_pre !== true }"
		>
			<a
				class="page-link"
				href="#"
				aria-label="Previous"
				@click.prevent="clickPage(pages.current_page - 1)"
			>
				<span aria-hidden="true">&laquo;</span>
			</a>
		</li>
		<li
			class="page-item shadow-sm"
			:class="{ active: pages.current_page === page }"
			v-for="page in pages.total_pages"
			:key="'page' + page"
		>
			<a class="page-link" href="#" @click.prevent="clickPage(page)">{{ page }}</a>
		</li>
		<li
			v-if="pages.total_pages > 0"
			class="page-item shadow-sm"
			:class="{ disabled: pages.has_next !== true }"
		>
			<a
				class="page-link"
				href="#"
				aria-label="Next"
				@click.prevent="clickPage(pages.current_page + 1)"
			>
				<span aria-hidden="true">&raquo;</span>
			</a>
		</li>
	</ul>
</template>
<script>
export default {
	props: ["pages"],
	methods: {
		clickPage(page) {
			this.$emit("emit-pages", page);
		},
	},
};
</script>
<style lang=""></style>
