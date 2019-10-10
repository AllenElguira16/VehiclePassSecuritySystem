import React, { FC } from 'react'
import { useStyles } from 'styles'

const Main: FC = () => {
  const styles = useStyles()

  return (
    <div className={styles.root}>
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
