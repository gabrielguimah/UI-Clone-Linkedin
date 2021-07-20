import React from "react";

import Panel from "../../Panel";

import {
  Container,
  Row,
  PostImage,
  Separator,
  Avatar,
  Column,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SendIcon,
} from "./styles";

const FeedPost: React.FC = () => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar
            src="https://media.glassdoor.com/sql/3439657/tiflux-squarelogo-1592754647059.png"
            alt="Tiflux"
          />
          <Column>
            <h3>Tiflux</h3>
            <h4>Sistema de HelpDesk, ServiceDesk e Atendimento</h4>
            <time>1 dia</time>
          </Column>
        </Row>

        <PostImage
          src="https://www.tiflux.com.br/assets/images/uses-home/xTelaDeTickets.png.pagespeed.ic.puD2NvnsoZ.webp"
          alt="Rocketseat Blog"
        />

        <Row className="likes">
          <span className="circle blue" />
          <span className="circle green" />
          <span className="circle red" />
          <span className="number">529</span>
        </Row>

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
          <button>
            <LikeIcon />
            <span>Gostei</span>
          </button>
          <button>
            <CommentIcon />
            <span>Comentar</span>
          </button>
          <button>
            <ShareIcon />
            <span>Compartilhar</span>
          </button>
          <button>
            <SendIcon />
            <span>Enviar</span>
          </button>
        </Row>
      </Container>
    </Panel>
  );
};

export default FeedPost;
