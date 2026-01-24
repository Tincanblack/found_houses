<spec lang="md">
# 首頁

## 行為 Behavior

-   元件載入時取得所有房源列表與最新文章
-   從已啟用的房源中隨機挑選 12 筆資料顯示
-   顯示最多 3 篇最新文章（索引 0-2）
-   房源卡片載入延遲 1 秒後顯示，提供載入視覺回饋
-   當資料載入中時顯示 Loading 元件
-   當沒有文章時，隱藏「更多房訊新知」連結

## 視覺 Visuals

-   首頁橫幅輪播（IndexBannerSlide）
-   房型分類區塊：淺灰背景 (bg-light)，上下間距 py-3/py-xl-5
    -   標題：「想要找什麼樣類型的房子?」，粗體
    -   四種房型卡片：公寓、別墅、華廈、大樓，帶陰影 (shadow-sm)
-   房源列表區塊：上下間距 py-3/py-xl-5
    -   隨機顯示 12 筆房源卡片
    -   響應式排列：1 欄 / 3 欄（md）/ 4 欄（lg）
    -   「查看更多」按鈕：外框按鈕樣式 (btn-outline-primary)，直角 (rounded-0)
-   房訊新知區塊：淺灰背景 (bg-light)，上下間距 py-3/py-xl-5
    -   桌面版（xl）：左側顯示大圖連結，右側顯示文章列表
    -   行動版：僅顯示文章列表，標題列在上方
    -   文章列表：顯示發布日期、標題、描述
    -   日期顯示：分為主要數字與次要月份

## 互動 Interaction

-   點擊房型卡片：導向房源列表頁，並帶入該房型類別查詢參數
-   點擊房源卡片：由 CaseCard 元件處理（導向房源詳情頁）
-   點擊「查看更多」按鈕：導向 /cases 頁面
-   點擊文章項目：導向該文章詳情頁 /news/:id
-   點擊「更多房訊新知」連結：導向 /news 頁面
</spec>
<script setup>
import { ref, computed, onMounted, getCurrentInstance } from "vue";
import IndexBannerSlide from "@/components/widgets/IndexBannerSlide.vue";
import CaseCard from "@/components/widgets/CaseCardLayout.vue";

const { proxy } = getCurrentInstance();

const isLoading = ref(false);
const cardLoading = ref(true);
const cases = ref([]);
const articles = ref([]);
const randomData = ref([]);

// 房型分類資料
const houseCategories = [
	{ name: "公寓", image: "index_feature_card_1.png" },
	{ name: "別墅", image: "index_feature_card_2.png" },
	{ name: "華廈", image: "index_feature_card_3.png" },
	{ name: "大樓", image: "index_feature_card_4.png" },
];

// 僅顯示前 3 筆文章
const displayedNews = computed(() => articles.value.slice(0, 3));

const getCasesList = async () => {
	try {
		isLoading.value = true;
		const url = `${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_PATH}/products/all`;
		const res = await proxy.$http.get(url);

		cases.value = res.data.products.filter((product) => product.is_enabled === 1);
		randomItem(12);

		setTimeout(() => {
			cardLoading.value = false;
		}, 1000);
	} catch (error) {
		proxy.$httpMessageState(error.response, "錯誤訊息");
	} finally {
		isLoading.value = false;
	}
};

const getNewsList = async (page = 1) => {
	try {
		const res = await proxy.$http.get(
			`${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_PATH}/articles/?page=${page}`
		);
		articles.value = res.data.articles;
	} catch (error) {
		proxy.$httpMessageState(error.response, "錯誤訊息");
	}
};

const randomItem = (count) => {
	const shuffled = [...cases.value];
	const length = shuffled.length;
	const selected = Math.min(count, length);

	for (let i = length - 1; i > length - selected - 1; i--) {
		const randomIndex = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
	}

	randomData.value = shuffled.slice(-selected);
};

onMounted(() => {
	getCasesList();
	getNewsList();
});
</script>
<template>
	<div class="site-content">
		<LoadingComponent :isLoading="isLoading"></LoadingComponent>
		<IndexBannerSlide></IndexBannerSlide>
		<section class="index-feature py-3 py-xl-5 text-center bg-light">
			<div class="container">
				<h2 class="index-feature__title mb-3 mb-xl-5 fw-bold">想要找什麼樣類型的房子?</h2>
				<div class="row">
					<div
						v-for="category in houseCategories"
						:key="category.name"
						class="col-6 col-xl-3"
					>
						<RouterLink
							class="index-feature-card text-dark text-decoration-none"
							:to="{
								path: '/cases',
								query: { category: category.name },
							}"
						>
							<div class="index-feature-image shadow-sm">
								<img
									:src="`/src/assets/images/${category.image}`"
									:alt="`${category.name}房型`"
								/>
								<h5 class="index-feature-card__title">{{ category.name }}</h5>
							</div>
						</RouterLink>
					</div>
				</div>
			</div>
		</section>
		<section class="index-cases py-3 py-xl-5">
			<div class="container">
				<div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2">
					<div v-for="item in randomData" :key="item.id">
						<CaseCard :item="item" :cardLoading="cardLoading"></CaseCard>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<div class="index-cases-footer text-center py-4">
							<RouterLink
								class="cases-footer__button btn btn-outline-primary rounded-0"
								to="/cases"
								>查看更多
							</RouterLink>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="index-news py-3 py-xl-5 bg-light">
			<div class="container">
				<div class="row">
					<div class="col-12 d-block d-xl-none">
						<div class="index-news-header">
							<h2 class="index-news-header__title">房訊新知</h2>
							<RouterLink
								class="index-news-header__link fs-6 text-decoration-none"
								to="/news"
							>
								更多房訊新知 →</RouterLink
							>
						</div>
					</div>
					<div class="col-12 col-xl-6 d-none d-xl-block">
						<RouterLink
							v-show="articles.length > 0"
							class="index-news-image"
							to="/news"
						>
							<span class="index-news-image__text">更多房訊新知</span>
						</RouterLink>
					</div>
					<div class="col-12 col-xl-6">
						<div
							v-for="news in displayedNews"
							:key="news.id"
							class="list-group index-news-list rounded-0"
						>
							<RouterLink
								class="list-group-item list-group-item-action d-flex gap-3 py-3"
								:to="`/news/${news.id}`"
							>
								<div
									class="d-flex gap-2 justify-content-between align-items-center"
								>
									<div class="index-news-list__date">
										<div class="public-date">
											<div class="public-date__main">
												{{ $format.publicDateFormat(news.create_at)[1] }}
											</div>
											<div class="public-date__sec">
												{{ $format.publicDateFormat(news.create_at)[0] }}
											</div>
										</div>
									</div>
									<div class="index-news-list__content">
										<h6 class="index-news-list__title">
											{{ news.title }}
										</h6>
										<div class="opacity-75 index-news-list__description">
											{{ news.description }}
										</div>
									</div>
								</div>
							</RouterLink>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<style lang=""></style>
