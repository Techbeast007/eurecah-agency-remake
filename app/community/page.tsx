import Head from "next/head";
import MasonryGrid from "./MasonryGrid";
import ClientsStrip from "./ClientsStrip";
import ThreeDForm from "./ThreeDForm";
import ScratchReveal from "../components/scrathable/ScratchReveal";
import ScrollPinnedCards from "./ScrollPinnedCards"
import FluidCursor from "../components/FluidCursor";
import Navbar from "../components/navbar/navbar";

export default function Community() {
  return (
    <>
    <Navbar/>
    <FluidCursor/>
    <ScratchReveal firstWord="Our" secondWord="Community"/>
      <Head>
        <title>Community | RealityBox</title>
        <meta name="description" content="Join the RealityBox Community to connect with creators, clients, and industry experts." />
      </Head>

      <main className="min-h-screen bg-gray-100 text-gray-900">
        {/* Hero Section (Already Implemented) */}
        <section className="py-16 text-center bg-blue-600 text-white">
          <h1 className="text-4xl font-bold">Join the RealityBox Community</h1>
          <p className="mt-4 text-lg">Collaborate, learn, and grow with filmmakers, marketers, and clients.</p>
        </section>

        {/* Second Fold - Masonry Grid */}
        <MasonryGrid />

        {/* Clients Section - Infinite Scrolling */}
        <ClientsStrip />
        <ScrollPinnedCards/>

        {/* 3D Form Section */}
        <ThreeDForm />
      </main>
    </>
  );
}
