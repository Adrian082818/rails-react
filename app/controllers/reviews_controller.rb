class ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :update, :destroy]
  before_action :set_game, only: [:index, :create]
  # before_action { @game = Game.find(params[:game_id])}

  # GET /reviews
  def index
    @reviews = @game.reviews

    render json: @reviews
  end

  # GET /review/1
  def show
    render json: @review
  end

  def new 
    # @review = Review.new 
  end 

  # POST /review
  def create
    @review = Review.new(review_params)

    if @review.save
      render json: @review#, status: :created, location: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  def edit
  end 

  # PATCH/PUT /review/1
  def update
    if @review.update(review_params)
      render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # DELETE /review/1
  def destroy
    @review.destroy
  end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      @review = Review.find(params[:id])
    end

    def set_game
      @game = Game.find(params[:game_id])
    end 

    # Only allow a trusted parameter "white list" through.
    def review_params
      params.require(:review).permit(:commenter, :content, :game_id)
    end
end
