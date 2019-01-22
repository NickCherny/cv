import React from 'react';
import {
  graphql,
  StaticQuery,
} from 'gatsby';
import Img from 'gatsby-image'
import styled from 'styled-components';

const AvatarMedia = styled.div`
  max-width: 300px;
  height: auto;
  border-radius: 50%;
  overflow: hidden;
`;

const Avatar = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <AvatarMedia>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </AvatarMedia>
    )}
  />
);

export default Avatar;
