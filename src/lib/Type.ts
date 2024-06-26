export interface OriginContent {
    content: string;
    origin_icon: string;
  }
  
export interface Gallery {
    ID: number;
    id: number;
    title: string;
    filename: string;
    filesize: number;
    url: string;
    link: string;
    alt: string;
    author: string;
    description: string;
    caption: string;
    name: string;
    status: string;
    uploaded_to: number;
    date: string;
    modified: string;
    menu_order: number;
    mime_type: string;
    type: string;
    subtype: string;
    icon: string;
    width: number;
    height: number;
    sizes: {
      thumbnail: string;
      "thumbnail-width": number;
      "thumbnail-height": number;
      medium: string;
      "medium-width": number;
      "medium-height": number;
      medium_large: string;
      "medium_large-width": number;
      "medium_large-height": number;
      large: string;
      "large-width": number;
      "large-height": number;
      "1536x1536": string;
      "1536x1536-width": number;
      "1536x1536-height": number;
      "2048x2048": string;
      "2048x2048-width": number;
      "2048x2048-height": number;
    };
  }

export type MethodStep = {
    background: string;
    method_content: string;
}
export interface Fields {
    ten_tra: string;
    location: string;
    tea_price: string;
    overview_bg: string;
    menu: string;
    origin_button_bg: string;
    materials_button_bg: string;
    method_button_bg: string;
    origins_content: OriginContent[];
    material_desxription: string;
    galleries: Gallery[];
    origin_head_title: string;
    origin_background: string;
    method_step: MethodStep[]
  }
  
export interface TeaDetails {
    title: string;
    fields: Fields;
}

interface RegularItem {
    content: string;
    icon: string;
  }
  
export interface TeaConfigData {
    home_bg: string;
    language_background: string;
    regular_bg: string;
    "location-bg": string;
    reqular_list: RegularItem[];
}

export interface TeaInfo {
        children: TeaInfo[],
        name: string,
        slug: string,
        position: Record<string, any>,
}
