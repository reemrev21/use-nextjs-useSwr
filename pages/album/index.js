import { useGetAlbums } from "../../src/core/service/album/get";
import { Box, Grid } from "@mui/material";
import { useRouter } from "next/router";

const Album = () => {
  const router = useRouter();
  const { photos, isLoading } = useGetAlbums();

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <Grid container spacing={1}>
      {photos &&
        photos.map((item) => (
          <Grid
            item
            xs={2}
            key={item.id}
            onClick={() => router.push(`/album/${item.id}`)}
          >
            <img src={item.thumbnailUrl} />
          </Grid>
        ))}
    </Grid>
  );
};

export default Album;
