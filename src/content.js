export default (content = "Dans son essence, webpack est un regroupeur de modules statiques. Dans un projet particulier, webpack traite tous les fichiers et les ressources comme des modules. Sous le capot, il s'appuie sur un graphe de dépendance. Un graphe de dépendance décrit comment les modules sont liés les uns aux autres à l'aide de références (instructions require et import) entre les fichiers. De cette façon, webpack parcourt statiquement tous les modules pour construire le graphe, et l'utilise pour générer un seul bundle (ou plusieurs bundles) - un fichier JavaScript contenant le code de tous les modules combinés dans le bon ordre.Statiquement signifie que, lorsque webpack construit son graphe de dépendances, il n'exécute pas le code source mais assemble les modules et leurs dépendances dans un bundle. Celui-ci peut ensuite être inclus dans vos fichiers HTML. Les fichiers et ressources de ce projet ont été traités par webpack. Une documentation claire est faite sur le site: 'https://www.sitepoint.com/webpack-beginner-guide/")=> {
    const element = document.createElement("p");
  
    element.innerHTML = content;
  
    return element;
  };