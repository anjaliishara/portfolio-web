import { Flex, Heading , Column,  Meta} from "@once-ui-system/core";
import GalleryView from "@/components/gallery/GalleryView";
import { baseURL, gallery,  } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: gallery.title,
    description: gallery.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(gallery.title)}`,
    path: gallery.path,
  });
}


export default function Gallery() {

  
  return (
    <Column  horizontal="center">

    <Heading
    marginBottom="l" variant="heading-strong-xl" >
          My hobbies are Traveling, Watching films & Listening to music ...

        </Heading>
       
    <Flex maxWidth="l">
      <GalleryView />
    </Flex>
    </Column>
  );
}
