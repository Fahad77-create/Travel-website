"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Tabs from "@/components/search/Tabs";
import SearchForm from "@/components/search/SearchForm";
import ResultsList from "@/components/search/ResultsList";
import { searchTabs } from "@/data/search";

export default function SearchSection() {
  const [activeId, setActiveId] = useState(searchTabs[0].id);
  const [results, setResults] = useState(null);
  const tab = searchTabs.find((item) => item.id === activeId);

  const handleTabChange = (id) => {
    setActiveId(id);
    setResults(null);
  };

  const handleSearch = (values) => {
    setResults(tab.items.filter((item) => tab.match(item, values)).map(tab.toCard));
  };

  return (
    <section id="book" className="relative z-10 -mt-28 pb-20 lg:-mt-36">
      <Container>
        <Reveal className="rounded-3xl bg-white p-5 shadow-lift sm:p-8">
          <Tabs items={searchTabs} active={activeId} onChange={handleTabChange} />
          <div className="mt-6">
            <SearchForm key={tab.id} fields={tab.fields} onSearch={handleSearch} />
          </div>
          <ResultsList items={results} />
        </Reveal>
      </Container>
    </section>
  );
}
