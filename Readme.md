# Uppgift: Inlogningsida

[Demo](https://argunho.github.io/Exircise-LoginPage/)

### Login: user
### Password: password

#### Testa med rätt och fel inloggningsupgifter

01. Funktion setStart()        - Denna funktionen körs automatisk när sida öppnas och kontrollerar är besökare/användare inloggad eller inte. 
			                         Om bes�kare/användare är inte inloggad visas en liten presentation och länk att starta annars öppnas fönster med hälsning till besökare/användare.
02. Funktion checkAuth()       - Returnerar true eller false, om besökare/användare är inloggad return blir true annars false, denna funktionen används i funktionen setStart()
03. Funktion getStart()        - Funktionen kopplad till länken "Klicka här att logga in" att öppna inlogningssida och form.
04. Funktion resetForm()       - Noll ställer login form när det öppnas
05. Funktion setBackground()   - Körs för att skifta bakgrund image beroende på parameters som fås in
06. Funktion submitForm()      - Tar emot data från login form och kontrollerar stämmer det eller inte med dem hårdskrivana variablerna. Om det success response sparas
				                     namn på localStorage annars skickas besökare/användare till error sidan
07. Funktion tryAgain()        - Vid eventuella när besökare/användare färsöker logga in, kommer han till error sida och där får han möjlighet att försöka på nytt och denna funktionen 
				                     återvänder besökare/användare till login form vid klick på knapp
08. Funktion closeForm()       - Stänger fönster med form och återställer html kod
09. Funktion logOut()          - Loggar ut besökare/användare, raderar besökare/anvåndare namn från localStorage
10. Funktion hide()            - Hjälp att använda samma kod på flera ställe istället att skriva det på nytt
11. Funktion showHideText()    - Visar block med text block med förklaring hut funktionr fungerar, tillgängligt bar för inloggad användare.
