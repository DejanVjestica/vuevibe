<template>
  <section>
    <div>
      <h1>Jones & Brown Legal</h1>
      <h2>Deep expertise, decisive courtroom presence</h2>
      <h3>We've been serving the Los Angeles area with expert legal counsel since 1976.</h3>
    </div>
  </section>
</template>

<style scoped>
section {
  grid-column: full;
  background-image: image-set(
    url('../assets/images/hero@1x.jpg') 1x,
    url('../assets/images/hero@2x.jpg') 2x
  );
  min-height: 50rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  color: var(--color-display-1);
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: center;

  > div {
    width: var(--content-max-width);
    margin-block-end: 5rem;
    display: flex;
    flex-wrap: wrap;
    column-gap: 5%;
    text-wrap: pretty;

    > h1 {
      font-size: 4.2rem;
    }

    > h2 {
      font-size: var(--header-1);
    }

    > h3 {
      font-size: var(--header-1s);
    }
  }

  @media (min-width: 768px) {
    > div > h1 {
      font-size: var(--display-3);
    }
  }

  @media (min-width: 1260px) {
    > div {
      > h1 {
        font-size: var(--hero-display);
      }

      > h2 {
        flex-basis: 60%;
      }

      > h3 {
        flex-basis: 35%;
      }
    }
  }
}
</style>
