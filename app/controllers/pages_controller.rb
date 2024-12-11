class PagesController < ApplicationController
  def home
  end

  def portfolio
  end

  def gallery
    @shuffled_images = (1..32).to_a.shuffle
  end

  def teaching
  end
end
