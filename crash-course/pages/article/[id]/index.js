import React from "react";
import { useRouter } from "next/router";

const article = () => {
	const router = useRouter();
	const { id } = router.query;

	return <div>This is an article {id}</div>;
};

export const getServerSideProps = async (context) => {
	const res = await fetch(`https`);
};

export default article;
