class AccountsController < ApplicationController
  before_action :set_account, only: [:show, :edit, :update, :destroy]

  # GET /accounts
  # GET /accounts.json
  def index
    @accounts = Account.all.page(params[:page]).per(10)
    # >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Busquedas >>>>>>>>>>>>>>>>>>>>>>>>>>
    if params[:search].present?
      @busqueda = params[:search].rstrip
      puts @busqueda
      consulta = "(accountnumber LIKE :datos )"
      @accounts = Account.select("accounts.*").where(consulta, datos: "%#{@busqueda}%").order('created_at DESC').page(params[:page]).per(10)
      if @accounts.empty?
        @error = 1
      end
    end

    if params[:idClien].present? && !params[:search].present?
      @accounts = Account.where("client_id=?",params[:idClien]).page(params[:page]).per(10)
    elsif params[:idClien].present? && params[:search].present?
      @accounts = Account.where("client_id=? = #{params[:idClien]} AND  #{@consulta}").page(params[:page]).per(10)

    end
  end

  # GET /accounts/1
  # GET /accounts/1.json
  def show
  end

  # GET /accounts/new
  def new
    @account = Account.new
  end

  # GET /accounts/1/edit
  def edit
    @edit = true
  end

  # POST /accounts
  # POST /accounts.json
  def create
    @account = Account.new(account_params)

    respond_to do |format|
      if @account.save
        format.html { redirect_to @account, notice: 'Account was successfully created.' }
        format.json { render :show, status: :created, location: @account }
      else
        format.html { render :new }
        format.json { render json: @account.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /accounts/1
  # PATCH/PUT /accounts/1.json
  def update
    respond_to do |format|
      if @account.update(account_params)
        format.html { redirect_to @account, notice: 'Account was successfully updated.' }
        format.json { render :show, status: :ok, location: @account }
      else
        format.html { render :edit }
        format.json { render json: @account.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /accounts/1
  # DELETE /accounts/1.json
  def destroy
    @account.destroy
    respond_to do |format|
      format.js
      format.json { head :locale }
    end
    @accounts =Account.all.page(params[:page]).per(10)
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_account
      @account = Account.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def account_params
      params.require(:account).permit(:accountnumber, :belongto, :client_id)
    end
end
