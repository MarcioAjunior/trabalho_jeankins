"use client";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <h1 className="flex justify-center items-center p-5 text-green-500 text-lg font-bold">
      Bem vindo a ShopPen
    </h1>
  );
};

export default HomePage;
