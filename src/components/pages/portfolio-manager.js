import React, { Component } from "react";
import axios from "axios";

import PortfolioSideBarList from '../portfolio/portfolio-sidebar-list';
import PortfolioForm from '../portfolio/portfolio-form';

export default class PortfolioManager extends Component {
    constructor() {
      super();
  
      this.state = {
        portfolioItems: [],
        portfolioToEdit: {}

      };
  
      this.handleNewFormSubmission = this.handleNewFormSubmission.bind(this);
      this.handleEditFormSubmission = this.handleEditFormSubmission.bind(this);
      this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
      this.handelDeleteClick = this.handelDeleteClick.bind(this);
      this.handelEditClick = this.handelEditClick.bind(this);
      this.clearPortfolioToEdit = this.clearPortfolioToEdit.bind(this);
    }

    clearPortfolioToEdit(){
      this.setState({
        portfolioToEdit: {}
      });
    }

    handelEditClick(portfolioItem) {
      this.setState({
        portfolioToEdit: portfolioItem
      });
    }
  
    handelDeleteClick(portfolioItem){
      axios
      .delete(
        `https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`,
        {withCredentials:true}
      )
      .then (response => {
        this.setState({
          portfolioItems: this.state.portfolioItems.filter(item => {
            return item.id !== portfolioItem.id;
          })
        })

        return response.data;

      })
      .catch(error => {
        console.log('handled error response', error);
      });
   }

   handleEditFormSubmission() {
     this.getPortfolioItems();
   }

   handleNewFormSubmission(portfolioItem) {
      this.setState({
        portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
      });
    }
  
    handleFormSubmissionError(error) {
      console.log("handleFormSubmissionError error", error);
    }
    getPortfolioItems() {
        axios
        .get(
            "https://kianna.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc",
            {
              withCredentials: true
            }
          )
        .then(response => {
            this.setState({
            portfolioItems: [...response.data.portfolio_items]
            });
        })
        .catch(error => {
            consle.log("error in getPortfolioItems", error)
        })
    }

    componentDidMount() {
        this.getPortfolioItems();
      }

    render() {
    return (
        <div className="portfolio-manager-wrapper">
            <div className="left-column">
                <PortfolioForm 
                    handleNewFormSubmission={this.handleNewFormSubmission}
                    handleEditFormSubmission={this.handleEditFormSubmission}
                    handleFormSubmissionError={this.handleFormSubmissionError}
                    clearPortfolioToEdit={this.clearPortfolioToEdit}
                    portfolioToEdit={this.state.portfolioToEdit}
                />
            </div>
        
            <div className="right-column">
                <PortfolioSideBarList 
                handelDeleteClick={this.handelDeleteClick}
                data={this.state.portfolioItems}
                handelEditClick={this.handelEditClick}
                
                />
            </div>
        </div>
    )}
}