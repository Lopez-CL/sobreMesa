import Typography  from "@material-ui/core/Typography";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";

const Dashboard = () =>{
    const theme = useTheme();
    return(
        <>
            <Button variant="outlined" color="primary">
                Submit
            </Button>
        </>
    )
}

export default Dashboard;