<template>
	<div class="site-content">
		<CaseBreadcrumb></CaseBreadcrumb>
		<section class="category-header py-3">
			<div class="container">
				<div class="row row-cols-lg-auto g-3 align-items-center justify-content-between">
					<div class="col-12">
						<div class="dropdown cases-sort">
							<button
								class="btn cases-sort-status dropdown-toggle"
								type="button"
								id="dropdownButton"
								data-bs-toggle="dropdown"
								aria-expanded="false"
								ref="currentSort"
							>
								預設顯示
							</button>
							<ul
								class="dropdown-menu cases-sort-select"
								aria-labelledby="dropdownButton"
							>
								<li>
									<button
										type="button"
										class="dropdown-item cases-sort-select__option"
										:class="{
											active: sortBy === '',
										}"
										@click="sortCaseList('')"
									>
										預設顯示
									</button>
								</li>
								<li>
									<button
										type="button"
										class="dropdown-item cases-sort-select__option"
										:class="{
											active: sortBy === 'priceLow2High',
										}"
										@click="sortCaseList('priceLow2High')"
									>
										售價從 低 > 高
									</button>
								</li>
								<li>
									<button
										type="button"
										class="dropdown-item cases-sort-select__option"
										:class="{
											active: sortBy === 'priceHigh2Low',
										}"
										@click="sortCaseList('priceHigh2Low')"
									>
										售價從 高 > 低
									</button>
								</li>
								<li>
									<button
										type="button"
										class="dropdown-item cases-sort-select__option"
										:class="{
											active: sortBy === 'houseAgeLow2High',
										}"
										@click="sortCaseList('houseAgeLow2High')"
									>
										屋齡從 低 > 高
									</button>
								</li>
								<li>
									<button
										type="button"
										class="dropdown-item cases-sort-select__option"
										:class="{
											active: sortBy === 'houseAgeHigh2Low',
										}"
										@click="sortCaseList('houseAgeHigh2Low')"
									>
										屋齡從 高 > 低
									</button>
								</li>
								<li>
									<button
										type="button"
										class="dropdown-item cases-sort-select__option"
										:class="{
											active: sortBy === 'squareFeetLow2High',
										}"
										@click="sortCaseList('squareFeetLow2High')"
									>
										坪數從 小 > 大
									</button>
								</li>
								<li>
									<button
										type="button"
										class="dropdown-item cases-sort-select__option"
										:class="{
											active: sortBy === 'squareFeetHight2Low',
										}"
										@click="sortCaseList('squareFeetHight2Low')"
									>
										坪數從 大 > 小
									</button>
								</li>
							</ul>
						</div>
					</div>
					<div class="col-12 d-none d-lg-block">
						<div class="cases-card-display">
							<span
								class="cases-card-display__button"
								:class="{
									isActive: this.cardLayout === 'card',
								}"
								@click="handleCardLayout('card')"
							>
								<i class="bi bi-grid fs-3 cases-card-display__icon"></i>
								卡片
							</span>
							<span
								class="cases-card-display__button"
								:class="{
									isActive: this.cardLayout === 'list',
								}"
								@click="handleCardLayout('list')"
							>
								<i class="bi bi-list-ul fs-3 cases-card-display__icon"></i>
								列表
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="category-cases pb-3">
			<div class="container">
				<div
					v-show="cardLayout === 'card'"
					class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2"
				>
					<div class="col" v-for="item in filterEnabledData" :key="item.id">
						<CaseCard :item="item" :cardLoading="cardLoading"></CaseCard>
					</div>
				</div>
				<div v-show="cardLayout === 'list'" class="row row-cols-1 g-2">
					<div class="col pb-lg-3" v-for="item in filterEnabledData" :key="item.id">
						<CaseList :item="item" :cardLoading="cardLoading"></CaseList>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
import CaseCard from "@/components/widgets/CaseCardLayout.vue";
import CaseList from "@/components/widgets/CaseListLayout.vue";
import CaseBreadcrumb from "@/components/product/CaseBreadcrumb.vue";

export default {
	components: {
		CaseCard,
		CaseList,
		CaseBreadcrumb,
	},
	data() {
		return {
			cases: [],
			sortCases: [],
			filterCategory: "",
			sortBy: "",
			cardLoading: false,
			cardLayout: "card",
		};
	},
	methods: {
		getCaseList(query) {
			this.cardLoading = true;
			let url = `${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_PATH}/products/all`;
			if (query) {
				url = `${import.meta.env.VITE_URL}/api/${
					import.meta.env.VITE_PATH
				}/products?category=${query}`;
			}
			this.$http
				.get(url)
				.then((res) => {
					this.cases = res.data.products;
					setTimeout(() => {
						this.cardLoading = false;
					}, 1000);
				})
				.catch((error) => {
					this.$httpMessageState(error.response, "錯誤訊息");
				});
		},
		sortCaseList(type) {
			switch (type) {
				case "priceLow2High":
					this.cases.sort((a, b) => a.price - b.price);
					this.$refs.currentSort.innerHTML = "售價從 低 > 高";
					break;
				case "priceHigh2Low":
					this.cases.sort((a, b) => b.price - a.price);
					this.$refs.currentSort.innerHTML = "售價從 高 > 低";
					break;
				case "houseAgeLow2High":
					this.cases.sort((a, b) => a.houseAge - b.houseAge);
					this.$refs.currentSort.innerHTML = "屋齡從 低 > 高";
					break;
				case "houseAgeHigh2Low":
					this.cases.sort((a, b) => b.houseAge - a.houseAge);
					this.$refs.currentSort.innerHTML = "屋齡從 高 > 低";
					break;
				case "squareFeetLow2High":
					this.cases.sort((a, b) => a.squareFeet - b.squareFeet);
					this.$refs.currentSort.innerHTML = "坪數從 小 > 大";
					break;
				case "squareFeetHight2Low":
					this.cases.sort((a, b) => b.squareFeet - a.squareFeet);
					this.$refs.currentSort.innerHTML = "坪數從 大 > 小";
					break;
				default:
					console.log(type);
					this.cases.sort((a, b) => b.num - a.num);
					this.$refs.currentSort.innerHTML = "預設顯示";
					break;
			}
			this.sortBy = type;
		},
		getCaseCardLayout() {
			const layout = localStorage.getItem("card_layout");
			if (layout === null || layout === undefined) return "card";
			localStorage.setItem("card_layout", layout);
			return layout;
		},
		handleCardLayout(view) {
			this.cardLayout = view;
			this.cardLoading = true;
			setTimeout(() => {
				this.cardLoading = false;
				localStorage.setItem("card_layout", this.cardLayout);
			}, 1000);
		},
		resizeWidth() {
			if (window.matchMedia("(max-width: 767px)").matches) this.cardLayout = "card";
		},
	},
	watch: {
		$route() {
			this.filterCategory = this.$route.query.category;
			if (
				this.filterCategory !== this.$route.query.category ||
				this.filterCategory === undefined
			) {
				this.getCaseList();
			}
		},
		cardLayout: {
			handler() {
				this.handleCardLayout(this.cardLayout);
			},
		},
	},
	computed: {
		filterEnabledData() {
			return this.cases.filter((product) => product.is_enabled == 1);
		},
	},
	mounted() {
		this.filterCategory = this.$route.query.category;
		this.cardLayout = this.getCaseCardLayout();

		this.getCaseList(this.filterCategory);
		this.handleCardLayout(this.cardLayout);

		window.addEventListener("resize", this.resizeWidth());
	},
};
</script>
