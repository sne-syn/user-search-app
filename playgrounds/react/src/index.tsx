import React from "react";
import { createRoot } from "react-dom/client";
const isErr = false;
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
  CardList,
  CardSubtitle,
  CardTitle,
  Container,
  List,
  ListContent,
  ListIcon,
  Logo,
  Modal,
  DateInfo,
  DefinitionList,
  ErrorMessage,
  TextBlock,
  ThemeToggler,
  VisuallyHidden,
  Wrapper,
  Header,
  ListItem,
  SearchBar,
} from "@user-search-app/react";
import "@user-search-app/scss/lib/Avatar.css";
import "@user-search-app/scss/lib/Button.css";
import "@user-search-app/scss/lib/CardList.css";
import "@user-search-app/scss/lib/CardSubtitle.css";
import "@user-search-app/scss/lib/CardTitle.css";
import "@user-search-app/scss/lib/Container.css";
import "@user-search-app/scss/lib/DefinitionList.css";
import "@user-search-app/scss/lib/ErrorMessage.css";
import "@user-search-app/scss/lib/List.css";
import "@user-search-app/scss/lib/ListIcon.css";
import "@user-search-app/scss/lib/Input.css";
import "@user-search-app/scss/lib/ListContent.css";
import "@user-search-app/scss/lib/Logo.css";
import "@user-search-app/scss/lib/Modal.css";
import "@user-search-app/scss/lib/DateInfo.css";
import "@user-search-app/scss/lib/TextBlock.css";
import "@user-search-app/scss/lib/ThemeToggler.css";
import "@user-search-app/scss/lib/VisuallyHidden.css";
import "@user-search-app/scss/lib/Wrapper.css";
import "@user-search-app/scss/lib/Header.css";
import "@user-search-app/scss/lib/ListItem.css";
import "@user-search-app/scss/lib/SearchBar.css";

const container = document.querySelector("#root");
const root = createRoot(container!);
root.render(
  <Container>
    <Header>
      <Logo name={APP_NAME} />
      <ThemeToggler defaultTheme={THEME} />
    </Header>
    <CardList>
      <SearchBar handleSubmit={() => console.log()} error="No results" />
      <VisuallyHidden tagName="h1" content="A GitHub user search app" />
      <Wrapper type="main" padded={true}>
        <Avatar src={AVATAR_SRC} alt="User" />
        <CardTitle content={NAME} />
        <CardSubtitle content={USER_NAME} />
        <ListContent content="" isLink={true} />
        <DateInfo date="2008-01-14T04:33:35Z" />
        <TextBlock content={TEXT} />
        <Wrapper type="accent" padded={true}>
          <DefinitionList list={DEFINITION_LIST} />
        </Wrapper>
        <List>
          <ListItem>
            <ListIcon
              src={iconData.location.src}
              alt={iconData.location.description}
            />
            <ListContent content="San Francisco" isLink={false} />
          </ListItem>
          <ListItem>
            <ListIcon
              src={iconData.location.src}
              alt={iconData.location.description}
            />
            <ListContent content="http://localhost:3000/" isLink={true} />
          </ListItem>
          <ListItem>
            <ListIcon
              isTransparent={true}
              src={iconData.location.src}
              alt={iconData.location.description}
            />
            <ListContent content="" isLink={true} />
          </ListItem>
        </List>
      </Wrapper>
    </CardList>

    {isErr && (
      <Modal
        content={<ErrorMessage content="No results" />}
        visibleOnMobile={true}
        visibleOnTablet={false}
      />
    )}
  </Container>
);
