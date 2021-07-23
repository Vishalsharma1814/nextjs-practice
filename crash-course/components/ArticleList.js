import React from "react";
import Articleitem from "./Articleitem";
import artilceStyles from "../styles/Article.module.css";

const ArticleList = ({ articles }) => {
	return (
		<div className={artilceStyles.grid}>
			{articles.map((article) => (
				<Articleitem article={article} />
			))}
		</div>
	);
};

export default ArticleList;
