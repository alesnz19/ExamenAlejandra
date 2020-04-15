class ClientsController < ApplicationController
  before_action :set_client, only: [:show, :edit, :update, :destroy]

  # GET /clients
  # GET /clients.json
  def index
    @clients = Client.page(params[:page]).per(10)

    # >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Busquedas >>>>>>>>>>>>>>>>>>>>>>>>>>
    if params[:search].present?
      @busqueda = params[:search].rstrip
      puts @busqueda
      consulta = "(clients.name LIKE :datos OR clients.lastname LIKE :datos OR lastnamem LIKE :datos )"
      @clients = Client.select("clients.*").where(consulta, datos: "%#{@busqueda}%").order('created_at DESC').page(params[:page]).per(10)
      if @clients.empty?
        @error = 1
      end
    end
  end

  # GET /clients/1
  # GET /clients/1.json
  def show
  end

  # GET /clients/new
  def new
    @client = Client.new
  end

  # GET /clients/1/edit
  def edit
  end

  # POST /clients
  # POST /clients.json
  def create
    @client = Client.new(client_params)

    respond_to do |format|
      if @client.save
        format.html { redirect_to @client, notice: 'El cliente fue creado con éxito.' }
        format.json { render :show, status: :created, location: @client }
        format.js
      else
        format.html { render :new }
        format.json { render json: @client.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /clients/1
  # PATCH/PUT /clients/1.json
  def update
    respond_to do |format|
      if @client.update(client_params)
        format.html { redirect_to @client, notice: 'El cliente fue actualizado con éxito.' }
        format.json { render :show, status: :ok, location: @client }
      else
        format.html { render :edit }
        format.json { render json: @client.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /clients/1
  # DELETE /clients/1.json
  def destroy
    @client.destroy
    respond_to do |format|
      format.js
      format.json { head :locale }
    end
    @clients =Client.all.page(params[:page]).per(10)
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_client
    @client = Client.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def client_params
    params.require(:client).permit(:name, :lastname, :lastnamem, :age, :phone, :street, :colony, :housenumber, :town)
  end
end
