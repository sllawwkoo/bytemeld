import style from "./itemPageArticle.module.scss";
import React from "react";

export function ItemPageArticle({ ...article }) {
	const {
		date,
		mainUrl,
		title,
		subtitle,
		description,
		subtitle2,
		description2,
		subtitle3,
		description3,
		subtitle4,
		description4,
		url2,
		url3,
		url4,
	} = article;

	console.log(article);

	// Масив для додаткових блоків
	const additionalBlocks = [
		{ subtitle: subtitle2, description: description2, url: url2 },
		{ subtitle: subtitle3, description: description3, url: url3 },
		{ subtitle: subtitle4, description: description4, url: url4 },
	];

	return (
		<div className={style.wrapper}>
			{/* Основна секція */}
			<div className={style.main_box}>
				<div className={style.image}>
					<img
						src={mainUrl}
						alt={title}
					/>
				</div>
				<div className={style.content_box}>
					<span className={style.date}>{date}</span>
					<h1 className={style.title}>{title}</h1>
					<h2 className={style.subtitle}>{subtitle}</h2>
					<p className={style.description}>{description}</p>
				</div>
			</div>

			{/* Додаткові секції */}
			<div className={style.blocks_body}>
				{additionalBlocks.map((block, index) => (
					<div
						key={index}
						className={style.subcontent_box}
					>
						{block.url && (
							<div className={style.sub_image}>
								<img
									src={block.url}
									alt={block.subtitle || `Additional Image ${index + 1}`}
								/>
							</div>
						)}
						{block.subtitle && (
							<h4 className={style.subtitle}>{block.subtitle}</h4>
						)}
						{block.description && (
							<p className={style.description}>{block.description}</p>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
