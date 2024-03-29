// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for Brands documents
 */
interface BrandsDocumentData {
  /**
   * background_image field in *Brands*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: brands.background_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * title_main_brand field in *Brands*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: brands.title_main_brand
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title_main_brand: prismic.TitleField;

  /**
   * image_brand field in *Brands*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: brands.image_brand
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_brand: prismic.ImageField<never>;

  /**
   * text_test field in *Brands*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: brands.text_test
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_test: prismic.RichTextField;
}

/**
 * Brands document from Prismic
 *
 * - **API ID**: `brands`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BrandsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<BrandsDocumentData>, "brands", Lang>;

/**
 * Item in *Footer → Sitemap*
 */
export interface FooterDocumentDataSitemapItem {
  /**
   * Label field in *Footer → Sitemap*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Section Title
   * - **API ID Path**: footer.sitemap[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Section Link field in *Footer → Sitemap*
   *
   * - **Field Type**: Select
   * - **Placeholder**: Select section
   * - **API ID Path**: footer.sitemap[].section_link
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  section_link: prismic.SelectField<
    | "Inicio"
    | "Numeros"
    | "Crecimiento"
    | "Soluciones"
    | "Partners"
    | "Nosotros"
    | "Testimonios"
    | "Contacto"
  >;
}

/**
 * Item in *Footer → Socials*
 */
export interface FooterDocumentDataSocialsItem {
  /**
   * Label field in *Footer → Socials*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Social Media
   * - **API ID Path**: footer.socials[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Link field in *Footer → Socials*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.socials[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * Logo Subtitle field in *Footer*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Inbound Marketing Platform & Strategy Developers
   * - **API ID Path**: footer.logo_subtitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  logo_subtitle: prismic.RichTextField;

  /**
   * Legal Statement field in *Footer*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: © XiA Experience 2021. Todos los derechos reservados.
   * - **API ID Path**: footer.legal_statement
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  legal_statement: prismic.RichTextField /**
   * Sitemap Title field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: SITEMAP
   * - **API ID Path**: footer.sitemap_title
   * - **Tab**: Sitemap
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  sitemap_title: prismic.KeyTextField;

  /**
   * Sitemap field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.sitemap[]
   * - **Tab**: Sitemap
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  sitemap: prismic.GroupField<Simplify<FooterDocumentDataSitemapItem>> /**
   * Socials Title field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: SOCIAL
   * - **API ID Path**: footer.socials_title
   * - **Tab**: Socials
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  socials_title: prismic.KeyTextField;

  /**
   * Socials field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.socials[]
   * - **Tab**: Socials
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  socials: prismic.GroupField<Simplify<FooterDocumentDataSocialsItem>>;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<FooterDocumentData>, "footer", Lang>;

/**
 * Item in *Homepage → Stats*
 */
export interface HomepageDocumentDataStatsItem {
  /**
   * Pre field in *Homepage → Stats*
   *
   * - **Field Type**: Text
   * - **Placeholder**: + / -
   * - **API ID Path**: homepage.stats[].pre
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  pre: prismic.KeyTextField;

  /**
   * Number field in *Homepage → Stats*
   *
   * - **Field Type**: Number
   * - **Placeholder**: 30
   * - **API ID Path**: homepage.stats[].number
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  number: prismic.NumberField;

  /**
   * Post field in *Homepage → Stats*
   *
   * - **Field Type**: Text
   * - **Placeholder**: % / Unidad
   * - **API ID Path**: homepage.stats[].post
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  post: prismic.KeyTextField;

  /**
   * Color field in *Homepage → Stats*
   *
   * - **Field Type**: Select
   * - **Placeholder**: Select color
   * - **API ID Path**: homepage.stats[].color
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  color: prismic.SelectField<"Gold" | "Blue" | "Aqua">;

  /**
   * Caption field in *Homepage → Stats*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Descripción del número
   * - **API ID Path**: homepage.stats[].caption
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  caption: prismic.RichTextField;
}

/**
 * Item in *Homepage → Solutions*
 */
export interface HomepageDocumentDataSolutionsItem {
  /**
   * Image field in *Homepage → Solutions*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.solutions[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Name field in *Homepage → Solutions*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Solution Name
   * - **API ID Path**: homepage.solutions[].name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;

  /**
   * Description field in *Homepage → Solutions*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Solution description text.
   * - **API ID Path**: homepage.solutions[].desc
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  desc: prismic.RichTextField;
}

/**
 * Item in *Homepage → Partners*
 */
export interface HomepageDocumentDataPartnersItem {
  /**
   * Logo field in *Homepage → Partners*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.partners[].logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Name field in *Homepage → Partners*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Partner Name
   * - **API ID Path**: homepage.partners[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Partner Link field in *Homepage → Partners*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.partners[].partner_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  partner_link: prismic.LinkField;
}

/**
 * Item in *Homepage → Testimonials*
 */
export interface HomepageDocumentDataTestimonialsItem {
  /**
   * Logo field in *Homepage → Testimonials*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.testimonials[].logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Client name field in *Homepage → Testimonials*
   *
   * - **Field Type**: Text
   * - **Placeholder**: ArCcanto
   * - **API ID Path**: homepage.testimonials[].client_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  client_name: prismic.KeyTextField;

  /**
   * Client title field in *Homepage → Testimonials*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Puesto o rol en la empresa
   * - **API ID Path**: homepage.testimonials[].client_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  client_title: prismic.RichTextField;

  /**
   * Review field in *Homepage → Testimonials*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Write your review here...
   * - **API ID Path**: homepage.testimonials[].review
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  review: prismic.RichTextField;
}

type HomepageDocumentDataBodySlice = never;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Home Top Title field in *Homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: + Prospectos, Mejor Calificados
   * - **API ID Path**: homepage.home_top_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  home_top_title: prismic.RichTextField;

  /**
   * Home Top Subtitle field in *Homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Transformamos interacción en fidelización
   * - **API ID Path**: homepage.home_top_subtitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  home_top_subtitle: prismic.RichTextField;

  /**
   * Home Top Button Label field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Conoce más
   * - **API ID Path**: homepage.home_top_btn_label
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  home_top_btn_label: prismic.KeyTextField;

  /**
   * Home Top Button Link field in *Homepage*
   *
   * - **Field Type**: Select
   * - **Placeholder**: Select Section
   * - **API ID Path**: homepage.home_top_btn_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  home_top_btn_link: prismic.SelectField<
    | "Numeros"
    | "Crecimiento"
    | "Soluciones"
    | "Partners"
    | "Nosotros"
    | "Testimonios"
    | "Contacto"
  >;

  /**
   * Home Top Description field in *Homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: XiA hace muchas cosas muy padres...
   * - **API ID Path**: homepage.home_top_desc
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  home_top_desc: prismic.RichTextField;

  /**
   * Home Top Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.home_top_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  home_top_image: prismic.ImageField<never> /**
   * Stats Title field in *Homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Tenemos los números
   * - **API ID Path**: homepage.stats_title
   * - **Tab**: Numeros
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */;
  stats_title: prismic.RichTextField;

  /**
   * Stats Subtitle field in *Homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: "Show me the money."
   * - **API ID Path**: homepage.stats_subtitle
   * - **Tab**: Numeros
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  stats_subtitle: prismic.RichTextField;

  /**
   * Stats field in *Homepage*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.stats[]
   * - **Tab**: Numeros
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  stats: prismic.GroupField<Simplify<HomepageDocumentDataStatsItem>> /**
   * Growth Big field in *Homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: The main big text about XiA's growth.
   * - **API ID Path**: homepage.growth_big
   * - **Tab**: Crecimiento
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */;
  growth_big: prismic.RichTextField;

  /**
   * Growth Small field in *Homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: The main small text about XiA's growth.
   * - **API ID Path**: homepage.growth_small
   * - **Tab**: Crecimiento
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  growth_small: prismic.RichTextField;

  /**
   * Growth Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.growth_image
   * - **Tab**: Crecimiento
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  growth_image: prismic.ImageField<never> /**
   * Solutions Title field in *Homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Soluciones
   * - **API ID Path**: homepage.solutions_title
   * - **Tab**: Solutions
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */;
  solutions_title: prismic.RichTextField;

  /**
   * Solutions Subtitle field in *Homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Conoce el XiAverse
   * - **API ID Path**: homepage.solutions_subtitle
   * - **Tab**: Solutions
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  solutions_subtitle: prismic.RichTextField;

  /**
   * Solutions Description field in *Homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Cada solución es un mundo
   * - **API ID Path**: homepage.solutions_desc
   * - **Tab**: Solutions
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  solutions_desc: prismic.RichTextField;

  /**
   * Solutions field in *Homepage*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.solutions[]
   * - **Tab**: Solutions
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  solutions: prismic.GroupField<Simplify<HomepageDocumentDataSolutionsItem>> /**
   * Partners Title field in *Homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: El barrio nos respalda
   * - **API ID Path**: homepage.partners_title
   * - **Tab**: Partners
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */;
  partners_title: prismic.RichTextField;

  /**
   * Partners Description field in *Homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Some text about our partners.
   * - **API ID Path**: homepage.partners_desc
   * - **Tab**: Partners
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  partners_desc: prismic.RichTextField;

  /**
   * Partners field in *Homepage*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.partners[]
   * - **Tab**: Partners
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  partners: prismic.GroupField<Simplify<HomepageDocumentDataPartnersItem>> /**
   * About Title field in *Homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: XiA y tu marca son uno mismo
   * - **API ID Path**: homepage.about_title
   * - **Tab**: About
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */;
  about_title: prismic.RichTextField;

  /**
   * About Description field in *Homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Some text about XiA.
   * - **API ID Path**: homepage.about_desc
   * - **Tab**: About
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  about_desc: prismic.RichTextField;

  /**
   * About Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.about_image
   * - **Tab**: About
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  about_image: prismic.ImageField<never> /**
   * Testimonials Title field in *Homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Que ellos te lo cuenten
   * - **API ID Path**: homepage.testimonials_title
   * - **Tab**: Testimonials
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */;
  testimonials_title: prismic.RichTextField;

  /**
   * Testimonials field in *Homepage*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.testimonials[]
   * - **Tab**: Testimonials
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  testimonials: prismic.GroupField<
    Simplify<HomepageDocumentDataTestimonialsItem>
  >;

  /**
   * Slice zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.body[]
   * - **Tab**: Testimonials
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  body: prismic.SliceZone<HomepageDocumentDataBodySlice> /**
   * Contact title field in *Homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.contact_title
   * - **Tab**: Contact
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */;
  contact_title: prismic.RichTextField;

  /**
   * Contact image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.contact_image
   * - **Tab**: Contact
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  contact_image: prismic.ImageField<never> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: XiA Experience | + Prospectos
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: XiA Experience... una descripción para SEO.
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Thumbnail field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_thumbnail
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_thumbnail: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

/**
 * Content for index documents
 */
interface IndexDocumentData {
  /**
   * title_text field in *index*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: index.title_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title_text: prismic.TitleField;

  /**
   * text_test field in *index*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: index.text_test
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_test: prismic.RichTextField;
}

/**
 * index document from Prismic
 *
 * - **API ID**: `index`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type IndexDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<IndexDocumentData>, "index", Lang>;

/**
 * Item in *Menu → Menu Links*
 */
export interface MenuDocumentDataMenuLinksItem {
  /**
   * Label field in *Menu → Menu Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Section name
   * - **API ID Path**: menu.menu_links[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Section Link field in *Menu → Menu Links*
   *
   * - **Field Type**: Select
   * - **Placeholder**: Select Section
   * - **API ID Path**: menu.menu_links[].section_link
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  section_link: prismic.SelectField<
    | "Numeros"
    | "Crecimiento"
    | "Soluciones"
    | "Partners"
    | "Nosotros"
    | "Testimonios"
    | "Contacto"
  >;

  /**
   * Button field in *Menu → Menu Links*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: menu.menu_links[].button
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  button: prismic.BooleanField;
}

/**
 * Content for Menu documents
 */
interface MenuDocumentData {
  /**
   * Menu Links field in *Menu*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.menu_links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  menu_links: prismic.GroupField<Simplify<MenuDocumentDataMenuLinksItem>>;
}

/**
 * Menu document from Prismic
 *
 * - **API ID**: `menu`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MenuDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<MenuDocumentData>, "menu", Lang>;

export type AllDocumentTypes =
  | BrandsDocument
  | FooterDocument
  | HomepageDocument
  | IndexDocument
  | MenuDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BrandsDocument,
      BrandsDocumentData,
      FooterDocument,
      FooterDocumentData,
      FooterDocumentDataSitemapItem,
      FooterDocumentDataSocialsItem,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataStatsItem,
      HomepageDocumentDataSolutionsItem,
      HomepageDocumentDataPartnersItem,
      HomepageDocumentDataTestimonialsItem,
      HomepageDocumentDataBodySlice,
      IndexDocument,
      IndexDocumentData,
      MenuDocument,
      MenuDocumentData,
      MenuDocumentDataMenuLinksItem,
      AllDocumentTypes,
    };
  }
}
