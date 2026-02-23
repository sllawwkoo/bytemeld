import { useTranslation } from "react-i18next";
import style from "./sectionBlog.module.scss";
import { Link } from "react-router-dom";
import { BlogItem } from "../BlogItem";
// import { useGetArticlesQuery } from "../../../store/bytemeld/bytemeld.api";
import { Error } from "../../Error";
import { Loader } from "../../Loader";
import LazyLoad from "react-lazy-load";
import data from "../../../mock/blog.json";

export function SectionBlog() {
	const { t, i18n } = useTranslation();

	const currentLanguage = i18n.language;

	const articles = data?.blog
		?.map((article) => ({
			id: article.id,
			slug: article.slug,
			date: article.date,
			mainUrl: article.mainUrl,
			...article[`data${currentLanguage.toUpperCase()}`],
		}))
		?.slice(-2)
		?.reverse();

	return (
		<section
			id="blog"
			className={style.wrapperBlog}
		>
			<LazyLoad
				className={style.lazy}
				offset={50}
			>
				<div className={style.container}>
					<div className={style.header_box}>
						<h2 className={style.title}>{t("blog.title")}</h2>
						<Link
							className={style.read}
							to="/blog"
						>
							{" "}
							{t("blog.read")}
						</Link>
					</div>

					{/* {isError && <Error />} */}
					<div className={style.blog_box}>
						{/* {isLoading && <Loader />} */}
						{articles?.map((article) => (
							<BlogItem
								key={article.id}
								{...article}
							/>
						))}
					</div>
				</div>
			</LazyLoad>
		</section>
	);
}
