import { useTranslation } from "react-i18next";
import style from "./pageBlog.module.scss";
import "./paginate.scss";
import { ItemPageBlog } from "../ItemPageBlog";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { scrollUpPage } from "../../../utils/helpers";
import data from "../../../mock/blog.json";

export default function PageBlog() {
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 6;

	const { t, i18n } = useTranslation();
	const currentLanguage = i18n.language;

	// Отримання статей з `blog.json`
	const articles = data?.blog
		?.map((article) => ({
			id: article.id,
			slug: article.slug,
			date: article.date,
			mainUrl: article.mainUrl,
			...article[`data${currentLanguage.toUpperCase()}`],
		}))
		?.reverse();

	// Загальна кількість статей
	const totalArticles = articles?.length || 0;

	// Вибір статей для поточної сторінки
	const endOffset = itemOffset + itemsPerPage;
	const currentItems = articles?.slice(itemOffset, endOffset) || [];

	// Оновлення кількості сторінок
	useEffect(() => {
		setPageCount(Math.ceil(totalArticles / itemsPerPage));
	}, [itemsPerPage, totalArticles]);

	// Обробка зміни сторінки
	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % totalArticles;
		setItemOffset(newOffset);
	};

	useEffect(() => {
		scrollUpPage();
	}, []);

	return (
		<section className={`${style.wrapper} `}>
			<div className={style.tittle_box}>
				<h2 className={style.title}>{t("blog.title")}</h2>
			</div>

			<div className={`${style.blog_wrapper}`}>
				<div className={style.blog_container}>
					{currentItems.length > 0 &&
						currentItems?.map((article) => (
							<ItemPageBlog
								key={article.id}
								{...article}
							/>
						))}
				</div>
			</div>

			<div className={style.paginate_box}>
				<ReactPaginate
					breakLabel="..."
					nextLabel=">"
					onPageChange={handlePageClick}
					pageRangeDisplayed={3}
					pageCount={pageCount || 0}
					previousLabel="<"
					renderOnZeroPageCount={null}
					containerClassName="pagination"
					pageClassName="page-num"
					previousLinkClassName="page-num"
					nextLinkClassName="page-num"
					activeClassName="active"
				/>
			</div>
		</section>
	);
}
