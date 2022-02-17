import React from "react";
import { v4 as uuid4 } from "uuid";

import Button from "src/components/common/Button";

import { CardTag, TagsContainer, TagsList } from "./styles";

import { CardT } from "../../index";

type TagContainerT = Pick<CardT, "tags">;

const TagContainer: React.FC<TagContainerT> = ({ tags }) => (
  <TagsContainer>
    <TagsList>
      {tags.map((tag) => (
        <CardTag key={uuid4()}>{tag}</CardTag>
      ))}
    </TagsList>
    <Button height={50} onClick={(): void => undefined}>
      Open recipe in new page
    </Button>
  </TagsContainer>
);

export default TagContainer;
