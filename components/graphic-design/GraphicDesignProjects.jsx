import React from "react";
import Image from "next/image";
import styles from "../../styles/utils.module.css";
import { FeaturesContainer, FeaturesCard, Text } from "../common/PageGrid";

export default function GraphicDesignProjects() {
  return (
    <FeaturesContainer>
      <FeaturesCard>
        <Image
          className={styles.borderRadiusBottom}
          src="/assets/graphic-design/desktop/image-change.jpg"
          alt="Picture of the author"
          width={350}
          height={320}
        />
        <Text>
          <h3>TIM BROWN</h3>
          <p>A book cover designed for Tim Brown’s new release, ‘Change’</p>
        </Text>
      </FeaturesCard>

      <FeaturesCard>
        <Image
          className={styles.borderRadiusBottom}
          src="/assets/graphic-design/desktop/image-boxed-water.jpg"
          alt="Picture of the author"
          width={350}
          height={320}
        />
        <Text>
          <h3>BOXED WATER</h3>
          <p>A simple packaging concept made for Boxed Water</p>
        </Text>
      </FeaturesCard>

      <FeaturesCard>
        <Image
          className={styles.borderRadiusBottom}
          src="/assets/graphic-design/desktop/image-science.jpg"
          alt="Picture of the author"
          width={350}
          height={320}
        />
        <Text>
          <h3>SCIENCE!</h3>
          <p>A poster made in collaboration with the Federal Art Project</p>
        </Text>
      </FeaturesCard>
    </FeaturesContainer>
  );
}
