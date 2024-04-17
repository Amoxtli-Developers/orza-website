import React from "react";
import { Grid } from "@mui/material";
import ClientCard from "../ClientCard/ClientCard";

function ClientGrid() {
  // Sample client data
  const clients = [
    { title: "www.googl", href: "https://twitter.com/mannupaaji" },
    { title: "/ui.aceternity.com", href: "https://twitter.com/mannupaaji" },
    { title: "/ui.aceternity.com", href: "https://twitter.com/mannupaaji" },
    { title: "/ui.aceternity.com", href: "https://twitter.com/mannupaaji" },
    { title: "/ui.aceternity.com", href: "https://twitter.com/mannupaaji" },
    { title: "/ui.aceternity.com", href: "https://twitter.com/mannupaaji" },
    { title: "/ui.aceternity.com", href: "https://twitter.com/mannupaaji" },
    { title: "/ui.aceternity.com", href: "https://twitter.com/mannupaaji" },
  ];

  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: { xs: 2, sm: 5, md: 5 },
        paddingBottom: { xs: 2, sm: 5, md: 7 },
      }}
    >
      {clients.map((client, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <ClientCard title={client.title} href={client.href} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ClientGrid;
