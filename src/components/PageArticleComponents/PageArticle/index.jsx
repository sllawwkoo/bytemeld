import style from "./pageArticle.module.scss";
import { useParams, Link } from "react-router-dom";
// import { useGetArticleBySlugQuery } from "../../../store/bytemeld/bytemeld.api";
// import { Error } from "../../Error";
// import { Loader } from "../../Loader";
import { ItemPageArticle } from "../ItemPageArticle";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "../../Icons";
import { useEffect } from "react";
import { scrollUpPage } from "../../../utils/helpers";
import data from "../../../mock/blog.json";

export function PageArticle() {
	const { t, i18n } = useTranslation();
	const currentLanguage = i18n.language;
	const { slug } = useParams();

	const articles = data?.blog?.map((article) => ({
		id: article.id,
		slug: article.slug,
		date: article.date,
		mainUrl: article.mainUrl,
		url2: article.url2,
		url3: article.url3,
		url4: article.url4,
		...article[`data${currentLanguage.toUpperCase()}`],
	}));

	// Знаходимо статтю за slug
	const article = articles?.find((item) => item.slug === slug);

	useEffect(() => {
		scrollUpPage();
	}, []);

	return (
		<section className={`${style.wrapper} `}>
			<div className={`${style.container}  `}>
				<div className={`${style.article_body} `}>
					<div className={style.title_box}>
						<Link to="/blog">{t("blog.title")}</Link>
						<span className={style.arrow}>
							<ArrowRight
								stroke="white"
								width={24}
								height={24}
							/>
						</span>
						<span className={style.title}>{article?.title}</span>
					</div>
					<ItemPageArticle {...article} />
				</div>
			</div>
		</section>
	);
}
