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
  Container,
  Input,
  ListContent,
  ListIcon,
  Logo,
  DateInfo,
  DefinitionList,
  ErrorMessage,
  TextBlock,
  ThemeToggler,
  VisuallyHidden,
  Wrapper,
  Header,
  ListItem,
} from "@user-search-app/react";
import "@user-search-app/scss/lib/Avatar.css";
import "@user-search-app/scss/lib/Button.css";
import "@user-search-app/scss/lib/CardSubtitle.css";
import "@user-search-app/scss/lib/CardTitle.css";
import "@user-search-app/scss/lib/Container.css";
import "@user-search-app/scss/lib/DefinitionList.css";
import "@user-search-app/scss/lib/ErrorMessage.css";
import "@user-search-app/scss/lib/ListIcon.css";
import "@user-search-app/scss/lib/Input.css";
import "@user-search-app/scss/lib/ListContent.css";
import "@user-search-app/scss/lib/Logo.css";
import "@user-search-app/scss/lib/DateInfo.css";
import "@user-search-app/scss/lib/TextBlock.css";
import "@user-search-app/scss/lib/ThemeToggler.css";
import "@user-search-app/scss/lib/VisuallyHidden.css";
import "@user-search-app/scss/lib/Wrapper.css";
import "@user-search-app/scss/lib/Header.css";
import "@user-search-app/scss/lib/ListItem.css";

const container = document.querySelector("#root");
const root = createRoot(container!);
root.render(
  <Container>
    <Header
      logo={<Logo name={APP_NAME} />}
      menu={<ThemeToggler defaultTheme={THEME} />}
    />
    <Wrapper type="main" interactive={true}>
      <Input query={null} />
      <Button label={LABEL} />
    </Wrapper>
    <ListItem
      icon={<ListIcon iconData={iconData.location} />}
      content={<ListContent content="San Francisco" isLink={false} />}
    />
    <Wrapper type="main">
      <Avatar src={AVATAR_SRC} />
      <CardTitle content={NAME} />
      <CardSubtitle content={USER_NAME} />
      <ListContent content="http://localhost:3000/" isLink={true} />
      <ListContent content="" isLink={true} />

      <DateInfo date="2008-01-14T04:33:35Z" />
      <Wrapper type="accent">
        <DefinitionList list={DEFINITION_LIST} />
      </Wrapper>
      <ErrorMessage content="No results" />

      <VisuallyHidden tagName="h1" content="A GitHub user search app" />
      <Wrapper type="accent">
        <TextBlock content={TEXT} />
      </Wrapper>
    </Wrapper>
  </Container>
);
