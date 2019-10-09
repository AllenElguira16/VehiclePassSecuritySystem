import React, { FC, useState, ChangeEvent } from 'react'
// import LeftNav from 'Components/Dashboard/LeftNav'
import { AppBar, Toolbar, Button, Card, CardContent, CardHeader, Tabs, Tab, Typography, Box } from '@material-ui/core'
import { useStyles } from 'styles'
import { Link, Route } from 'react-router-dom'
import Users from './Users'

interface TabPanelProps {
  // children?: React.ReactNode;
  // dir?: string;
  index: any
  value: any
}

const TabPanel: FC<TabPanelProps> = props => {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  )
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

const Main: FC = () => {
  const styles = useStyles()
  const [tab, setTab] = useState(0)
  const handleTabChange = (event: ChangeEvent<any>, value: number) => {
    setTab(value)
  }

  return (
    <div className={styles.root}>
      <AppBar position="relative" color="inherit" elevation={1}>
        <Tabs value={tab} onChange={handleTabChange}>
          <Tab label="User" {...a11yProps(0)} />
        </Tabs>
      </AppBar>
      <TabPanel value={tab} index={0}>
        <Users />
      </TabPanel>
      {/* <Card>
        <CardHeader>
          <Button component={Link} to="/dashboard/user">
            User
          </Button>
        </CardHeader>
        <CardContent>
          <Route exact path="/dashboard/user" component={Users} />
          <Route exact path="/dashboard/history" />
        </CardContent>
      </Card> */}
    </div>
  )
}

export default Main
