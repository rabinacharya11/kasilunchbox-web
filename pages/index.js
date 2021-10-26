import HeroSection from "../components/heroSection";
import { useEffect, useState } from "react";
import Category from "../components/category";
import Image from "next/image";
import ForYous from "../components/foryou";
import NewArrivals from "../components/newarrivals";
import AllProducts from "../components/allProducts";
import CategoryProducts from "../components/categoryProducts";
import Product from "../components/product";

export default function Home() {
  const token = "1|qLdCOQHDUIB9Qvcs8eQR56xS3z7nR3zKBQPyIEPc";

  return (
    <>
      <HeroSection />

      {/* Recommended For You */}
      <Category name="Recommended For You" />

      <center>
        <section class="flex place-content-center place-items-center text-gray-600 body-font">
          <div class="container  px-5 py-2 mx-auto">
            <div class="flex flex-wrap  place-items-center -m-4">
              <ForYous />
            </div>
          </div>
        </section>
      </center>
      {/* New Arrivals */}
      <Category name="New Arrivals" />

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-2 mx-auto">
          <div class="flex flex-wrap -m-4">
            <NewArrivals />
          </div>
        </div>
      </section>
      {/* All Products */}
      <Category name="All Products" />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-2 mx-auto">
          <div class="flex flex-wrap -m-4">
            <AllProducts />
          </div>
        </div>
      </section>
    </>
  );
}
