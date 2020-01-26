library(shiny)
library(htmltools)

drumkitUI <- function(id) {
  ns <- NS(id)
  tagList(
    htmlTemplate("drumkit.svg")
  )
}

drumkit <- function(input, output, session, ...) {
}

ui <- fluidPage(
  drumkitUI("drums")
)

server <- function(input, output, session) {

}

shinyApp(ui, server)
