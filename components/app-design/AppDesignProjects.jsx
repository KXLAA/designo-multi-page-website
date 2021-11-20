import React from "react";
import { FeaturesContainer, FeaturesCard, Text } from "../common/PageGrid";
import Image from "next/image";
import styles from "../../styles/utils.module.css";

export default function AppDesignProjects() {
  return (
    <FeaturesContainer>
      <FeaturesCard>
        <Image
          className={styles.borderRadiusBottom}
          src="/assets/app-design/desktop/image-airfilter.jpg"
          alt="Picture of the author"
          width={350}
          height={320}
        />
        <Text>
          <h3>AIRFILTER</h3>
          <p>
            Solving the problem of poor indoor air quality by filtering the air
          </p>
        </Text>
      </FeaturesCard>

      <FeaturesCard>
        <Image
          className={styles.borderRadiusBottom}
          src="/assets/app-design/desktop/image-eyecam.jpg"
          alt="Picture of the author"
          width={350}
          height={320}
        />
        <Text>
          <h3>EYECAM</h3>
          <p>
            Product that lets you edit your favorite photos and videos at any
            time
          </p>
        </Text>
      </FeaturesCard>

      <FeaturesCard>
        <Image
          className={styles.borderRadiusBottom}
          src="/assets/app-design/desktop/image-faceit.jpg"
          alt="Picture of the author"
          width={350}
          height={320}
        />
        <Text>
          <h3>FACEIT</h3>
          <p>
            Get to meet your favorite internet superstar with the faceit app
          </p>
        </Text>
      </FeaturesCard>

      <FeaturesCard>
        <Image
          className={styles.borderRadiusBottom}
          src="/assets/app-design/desktop/image-todo.jpg"
          alt="Picture of the author"
          width={350}
          height={320}
        />
        <Text>
          <h3>TODO</h3>
          <p>A todo app that features cloud sync with light and dark mode</p>
        </Text>
      </FeaturesCard>

      <FeaturesCard>
        <Image
          className={styles.borderRadiusBottom}
          src="/assets/app-design/desktop/image-loopstudios.jpg"
          alt="Picture of the author"
          width={350}
          height={320}
        />
        <Text>
          <h3>LOOPSTUDIOS</h3>
          <p>A VR experience app made for Loopstudios</p>
        </Text>
      </FeaturesCard>
    </FeaturesContainer>
  );
}
