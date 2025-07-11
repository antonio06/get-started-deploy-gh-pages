import client from "../../lib/client";
import type { About } from "./about.model";

export async function getAbout(): Promise<About> {
  const aboutContent = await client.getContent<About>(
    {
      // TODO: IMPORTANTE PON EL ID QUE TENGAS EN TU INSTANCIA
      // DE About en Content Island
      id: "686fb23b260047e7859e57fa",
      contentType: "About",
    }
  );

  return aboutContent;
}
