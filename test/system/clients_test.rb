require "application_system_test_case"

class ClientsTest < ApplicationSystemTestCase
  setup do
    @client = clients(:one)
  end

  test "visiting the index" do
    visit clients_url
    assert_selector "h1", text: "Clients"
  end

  test "creating a Client" do
    visit clients_url
    click_on "New Client"

    fill_in "Age", with: @client.age
    fill_in "Colony", with: @client.colony
    fill_in "Housenumber", with: @client.housenumber
    fill_in "Lastname", with: @client.lastname
    fill_in "Lastnamem", with: @client.lastnamem
    fill_in "Name", with: @client.name
    fill_in "Phone", with: @client.phone
    fill_in "Street", with: @client.street
    fill_in "Town", with: @client.town
    click_on "Create Client"

    assert_text "Client was successfully created"
    click_on "Back"
  end

  test "updating a Client" do
    visit clients_url
    click_on "Edit", match: :first

    fill_in "Age", with: @client.age
    fill_in "Colony", with: @client.colony
    fill_in "Housenumber", with: @client.housenumber
    fill_in "Lastname", with: @client.lastname
    fill_in "Lastnamem", with: @client.lastnamem
    fill_in "Name", with: @client.name
    fill_in "Phone", with: @client.phone
    fill_in "Street", with: @client.street
    fill_in "Town", with: @client.town
    click_on "Update Client"

    assert_text "Client was successfully updated"
    click_on "Back"
  end

  test "destroying a Client" do
    visit clients_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Client was successfully destroyed"
  end
end
