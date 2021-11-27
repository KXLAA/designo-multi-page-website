import styled from "styled-components";
import { Mobile, Tablet } from "./MediaQueries";
import { useMediaQuery } from "react-responsive";

export const BgPattern = () => {
  const Pattern = styled.div`
    background: linear-gradient(
      90deg,
      rgba(93, 2, 2, 0.0001) 0%,
      rgba(93, 2, 2, 0.497569) 100%
    );
    opacity: 0.31;
    width: 292px;
    height: 292px;
    position: absolute;
    right: 0px;
    bottom: 130px;
    border-radius: 100%;
  `;

  return (
    <>
      <Pattern style={{ bottom: "112px", transform: "rotate(-90deg)" }} />
      <Pattern style={{ bottom: "112px", right: "291px" }} />
      <Pattern
        style={{ bottom: "112px", right: "581px", transform: "rotate(-90deg)" }}
      />

      <Pattern style={{ top: "129px", transform: "rotate(-90deg)" }} />
      <Pattern style={{ top: "129px", right: "291px" }} />
      <Pattern
        style={{ top: "129px", right: "580px", transform: "rotate(90deg)" }}
      />
    </>
  );
};

export const BgPatternSmall = () => {
  const Tablet = useMediaQuery({ query: "(min-width: 475px)" });
  const Mobile = useMediaQuery({ query: "(max-width: 475px)" });

  const Pattern = styled.div`
    background: linear-gradient(
      90deg,
      rgba(93, 2, 2, 0.0001) 0%,
      rgba(93, 2, 2, 0.497569) 100%
    );
    opacity: 0.31;
    width: 292px;
    height: 292px;
    position: absolute;
    right: 0px;
    bottom: 130px;
    border-radius: 100%;
  `;

  return (
    <>
      {Tablet && <Pattern style={{ transform: "rotate(-90deg)" }} />}

      {Tablet && <Pattern style={{ right: "295px" }} />}

      {Tablet && (
        <Pattern style={{ top: "200px", transform: "rotate(-90deg)" }} />
      )}

      {Tablet && <Pattern style={{ top: "200px", right: "291px" }} />}

      {Mobile && <Pattern style={{ right: "15px", top: "-60px" }} />}

      {Mobile && (
        <Pattern
          style={{ top: "250px", right: "35px", transform: "rotate(-90deg)" }}
        />
      )}

      {/* <Tablet>
        <Pattern style={{ transform: "rotate(-90deg)" }} />
      </Tablet>

      <Tablet>
        <Pattern style={{ right: "295px" }} />
      </Tablet>

      <Tablet>
        <Pattern style={{ top: "200px", transform: "rotate(-90deg)" }} />
      </Tablet>

      <Tablet>
        <Pattern style={{ top: "200px", right: "291px" }} />
      </Tablet>

      <Mobile>
        <Pattern style={{ right: "15px", top: "-60px" }} />
      </Mobile>

      <Mobile>
        <Pattern
          style={{ top: "250px", right: "35px", transform: "rotate(-90deg)" }}
        />
      </Mobile> */}
    </>
  );
};
