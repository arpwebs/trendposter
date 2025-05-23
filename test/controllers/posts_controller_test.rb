require "test_helper"

class PostsControllerTest < ActionDispatch::IntegrationTest
  test "should get post_of_the_day" do
    get posts_post_of_the_day_url
    assert_response :success
  end
end
