"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Field from "@/components/ui/Field";
import Button from "@/components/ui/Button";

const initialValues = (fields) =>
  fields.reduce((acc, field) => ({ ...acc, [field.name]: field.type === "select" ? field.options[0].value : "" }), {});

export default function SearchForm({ fields, onSearch }) {
  const [values, setValues] = useState(() => initialValues(fields));

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(values);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2 lg:flex lg:items-end">
      {fields.map((field) => (
        <Field key={field.name} {...field} className="lg:flex-1" value={values[field.name]} onChange={handleChange} />
      ))}
      <Button type="submit" className="h-[46px] sm:col-span-2 lg:col-span-1">
        <Search className="h-4 w-4" />
        Search
      </Button>
    </form>
  );
}
