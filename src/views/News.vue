<spec lang="md">
# 房訊新知列表頁

## 行為 Behavior

-   元件載入時取得所有文章列表
-   當有文章資料時顯示輪播區塊（NewsSlide）
-   當資料載入中時顯示 Loading 元件

## 視覺 Visuals

-   文章輪播區塊：顯示於頁面頂部，有文章時才顯示
-   文章列表區塊：上下間距 py-5
    -   響應式排列：1 欄 / 3 欄（md）
    -   每個文章卡片包含：發布日期、背景圖片、標題
    -   日期顯示：分為主要數字與次要月份

## 互動 Interaction

-   點擊文章卡片：導向該文章詳情頁 /news/:id
</spec>
<template>
	<div class="site-content">
		<LoadingComponent :isLoading="isLoading"></LoadingComponent>
		<NewsSlide v-if="news.length > 0" :articles="news"></NewsSlide>
		<div class="news-list py-5">
			<div class="news-list-column">
				<div class="container">
					<div class="row row-cols-1 row-cols-md-3">
						<div class="col" v-for="item in news" :key="item.id">
							<div class="news-list-card">
								<RouterLink class="news-list-card__link" :to="`/news/${item.id}`">
									<div class="news-list-card__date">
										<div class="public-date">
											<div class="public-date__main">
												{{ $format.publicDateFormat(item.create_at)[1] }}
											</div>
											<div class="public-date__sec">
												{{ $format.publicDateFormat(item.create_at)[0] }}
											</div>
										</div>
									</div>
									<div
										class="news-list-card__background"
										:style="{
											backgroundImage: `url(${item.image})`,
										}"
									></div>
									<h5 class="news-list-card__title">
										{{ item.title }}
									</h5>
								</RouterLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";
import NewsSlide from "@/components/news/NewsSlide.vue";

const { proxy } = getCurrentInstance();

const isLoading = ref(false);
const news = ref([]);

const getNewsList = async (page = 1) => {
	try {
		isLoading.value = true;
		const res = await proxy.$http.get(
			`${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_PATH}/articles/?page=${page}`
		);
		news.value = res.data.articles;
	} catch (error) {
		proxy.$httpMessageState(error.response, "錯誤訊息");
	} finally {
		isLoading.value = false;
	}
};

onMounted(() => {
	getNewsList();
});
</script>
