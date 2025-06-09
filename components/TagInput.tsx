import React, { useState, KeyboardEvent } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge"; // Assuming you have a Badge component or will create one
import Image from "next/image";

interface TagInputProps {
  initialTags?: string[];
  onTagsChange: (tags: string[]) => void;
  placeholder?: string;
}

const TagInput: React.FC<TagInputProps> = ({ initialTags = [], onTagsChange, placeholder = "Add tags..." }) => {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState<string[]>(initialTags);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      const newTag = inputValue.trim();
      if (!tags.includes(newTag)) {
        const updatedTags = [...tags, newTag];
        setTags(updatedTags);
        onTagsChange(updatedTags);
      }
      setInputValue("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
    onTagsChange(updatedTags);
  };

  return (
    <div className="flex flex-col gap-2">
      <Input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        className="w-full"
      />
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge
            key={tag}
            className="flex items-center gap-1 px-3 py-1 text-xs bg-brand-100/20 text-brand-100 rounded-full font-medium"
          >
            {tag}
            <button
              type="button"
              onClick={() => handleRemoveTag(tag)}
              className="ml-1 rounded-full p-0.5 hover:bg-white/20 focus:outline-none focus:ring-0"
            >
              <Image
                src="/assets/icons/close-dark.svg"
                alt="Remove tag"
                width={10}
                height={10}
              />
            </button>
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default TagInput; 