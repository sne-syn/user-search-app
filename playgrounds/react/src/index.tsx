import React from "react";
import { createRoot } from "react-dom/client";
import {
  APP_NAME,
  AVATAR_SRC,
  LABEL,
  NAME,
  USER_NAME,
  DEFINITION_LIST,
  iconData,
  THEME,
  TEXT,
} from "./consts";
import {
  Avatar,
  Button,
  CardSubtitle,
  CardTitle,
  Icon,
  Input,
  Link,
  Logo,
  DateInfo,
  DefinitionList,
  ErrorMessage,
  TextBlock,
  ThemeToggler,
  VisuallyHidden,
  Wrapper,
} from "@user-search-app/react";
import "@user-search-app/scss/lib/Avatar.css";
import "@user-search-app/scss/lib/Button.css";
import "@user-search-app/scss/lib/CardSubtitle.css";
import "@user-search-app/scss/lib/CardTitle.css";
import "@user-search-app/scss/lib/DefinitionList.css";
import "@user-search-app/scss/lib/ErrorMessage.css";
import "@user-search-app/scss/lib/Icon.css";
import "@user-search-app/scss/lib/Input.css";
import "@user-search-app/scss/lib/Link.css";
import "@user-search-app/scss/lib/Logo.css";
import "@user-search-app/scss/lib/DateInfo.css";
import "@user-search-app/scss/lib/TextBlock.css";
import "@user-search-app/scss/lib/ThemeToggler.css";
import "@user-search-app/scss/lib/VisuallyHidden.css";
import "@user-search-app/scss/lib/Wrapper.css";

const container = document.querySelector("#root");
const root = createRoot(container!);
root.render(
  <div>
    <Wrapper type="main" interactive={true}>
      <Input query={null} />
      <Button label={LABEL} />
    </Wrapper>
    <Wrapper type="main">
      <Avatar src={AVATAR_SRC} />
      <CardTitle content={NAME} />
      <CardSubtitle content={USER_NAME} />
      <Icon iconData={iconData.location} />
      <Link link={null} />
      <Logo name={APP_NAME} />
      <DateInfo date="2008-01-14T04:33:35Z" />{" "}
      <Wrapper type="accent">
        <DefinitionList list={DEFINITION_LIST} />
      </Wrapper>
      <ErrorMessage content="No results" />
      <ThemeToggler theme={THEME} />
      <VisuallyHidden tagName="h1" content="A GitHub user search app" />
      <Wrapper type="accent">
        <TextBlock content={TEXT} />
      </Wrapper>
    </Wrapper>
  </div>
);
