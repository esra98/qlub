import Button from '@mui/material/Button';
import { Box} from '@mui/material'

interface MainFeaturedPostProps {
    categories: string;
}

export default function DetailCategories(props: MainFeaturedPostProps) {
  const { categories } = props;
  const categoryList = categories.split(',').map((category) => category.trim());

  return (
    <Box>
      <Box
        sx={{
            position: 'relative',
            p: { xs: 3, md: 6 },
            pr: { md: 0 },
            pt: { xs:0,md: 0 },
            width: "100%",
            display: 'flex',
        }}
      >
        {categoryList.map((category, index) => (
          <Button
            key={index}
            color="primary"
            style={{ marginRight: '8px', marginBottom: '8px' , color:'#7d00d4', border: 'solid 1px #f1c001'}}
          >
            {category}
          </Button>
        ))}
      </Box>
    </Box>
  );
}