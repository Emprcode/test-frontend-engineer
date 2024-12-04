"use client";

import { FC, useEffect } from "react";
import HeroSection from "./HeroSection";
import Filters, { FiltersProps } from "./Filters";
import { useListProductsQuery } from "@/redux/api/shopAPISlice";
import { useDispatch, useSelector } from "react-redux";
import { selectShop, setActiveCategory } from "@/redux/features/shopSlice";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Shop } from "@/types";
import Pagination from "./ui/Pagination";

interface DashboardProps extends FiltersProps {}

const Dashboard: FC<DashboardProps> = ({ data }) => {
  const router = useRouter();
  const path = usePathname();
  const params = useSearchParams();
  const dispatch = useDispatch();
  const { products, activeCategory } = useSelector(selectShop);
  const { isLoading, refetch } = useListProductsQuery();

  useEffect(() => {
    let categoryQuery = activeCategory ? "category=" + activeCategory : "";

    let query: string = "";

    if (categoryQuery) query = categoryQuery;

    router.replace(`${path}?${query}`);
    refetch();
    // eslint-disable-next-line
  }, [activeCategory]);

  useEffect(() => {
    let categoryQuery = params.get("category");
    if (categoryQuery) dispatch(setActiveCategory(categoryQuery));
    // eslint-disable-next-line
  }, []);

  const filteredProducts = activeCategory
    ? products?.filter(
        (product: Shop.ProductType) => product.category === activeCategory
      )
    : products;

  return (
    <>
      <HeroSection />
      <Filters data={data} />
      <Pagination filteredProducts={filteredProducts} />
    </>
  );
};

export default Dashboard;
