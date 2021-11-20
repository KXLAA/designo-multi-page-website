import React from "react";
import Image from "next/image";
import styles from "../../styles/utils.module.css";
import { FeaturesContainer, FeaturesCard, Text } from "../common/PageGrid";

export default function WebDesignProjects() {
  return (
    <FeaturesContainer>
      <FeaturesCard>
        <Image
          className={styles.borderRadiusBottom}
          src="/assets/web-design/desktop/image-express.jpg"
          alt="Picture of the author"
          width={350}
          height={320}
        />
        <Text>
          <h3>EXPRESS</h3>
          <p>A multi-carrier shipping website for ecommerce businesses</p>
        </Text>
      </FeaturesCard>

      <FeaturesCard>
        <Image
          className={styles.borderRadiusBottom}
          src="/assets/web-design/desktop/image-transfer.jpg"
          alt="Picture of the author"
          width={350}
          height={320}
        />
        <Text>
          <h3>TRANSFER</h3>
          <p>
            Site for low-cost money transfers and sending money within seconds
          </p>
        </Text>
      </FeaturesCard>

      <FeaturesCard>
        <Image
          className={styles.borderRadiusBottom}
          src="/assets/web-design/desktop/image-photon.jpg"
          alt="Picture of the author"
          width={350}
          height={320}
        />
        <Text>
          <h3>PHOTON</h3>
          <p>
            A state-of-the-art music player with high-resolution audio and DSP
            effects
          </p>
        </Text>
      </FeaturesCard>

      <FeaturesCard>
        <Image
          className={styles.borderRadiusBottom}
          src="/assets/web-design/desktop/image-builder.jpg"
          alt="Picture of the author"
          width={350}
          height={320}
        />
        <Text>
          <h3>BUILDER</h3>
          <p>Connects users with local contractors based on their location</p>
        </Text>
      </FeaturesCard>
      <FeaturesCard>
        <Image
          className={styles.borderRadiusBottom}
          src="/assets/web-design/desktop/image-blogr.jpg"
          alt="Picture of the author"
          width={350}
          height={320}
        />
        <Text>
          <h3>BLOGR</h3>
          <p>Blogr is a platform for creating an online blog or publication</p>
        </Text>
      </FeaturesCard>
      <FeaturesCard>
        <Image
          className={styles.borderRadiusBottom}
          src="/assets/web-design/desktop/image-camp.jpg"
          alt="Picture of the author"
          width={350}
          height={320}
        />
        <Text>
          <h3>CAMP</h3>
          <p>
            Get expert training in coding, data, design, and digital marketing
          </p>
        </Text>
      </FeaturesCard>
    </FeaturesContainer>
  );
}
