package dev.openshift.tapestry.angular2.services;

import org.apache.shiro.realm.Realm;
import org.apache.tapestry5.MetaDataConstants;
import org.apache.tapestry5.SymbolConstants;
import org.apache.tapestry5.hibernate.HibernateTransactionDecorator;
import org.apache.tapestry5.ioc.*;
import org.apache.tapestry5.ioc.annotations.Contribute;
import org.apache.tapestry5.ioc.annotations.InjectService;
import org.apache.tapestry5.ioc.annotations.Match;
import org.apache.tapestry5.ioc.services.ClasspathURLConverter;
import org.apache.tapestry5.ioc.services.LoggingAdvisor;
import org.apache.tapestry5.services.HttpServletRequestFilter;
import org.apache.tapestry5.services.LibraryMapping;
import org.apache.tapestry5.services.compatibility.Compatibility;
import org.apache.tapestry5.services.compatibility.Trait;
import org.slf4j.Logger;
import org.tynamo.resteasy.ResteasySymbols;
import org.tynamo.security.SecuritySymbols;
import org.tynamo.shiro.extension.realm.text.ExtendedPropertiesRealm;




/**
 * This module is automatically included as part of the Tapestry IoC Registry,
 * it's a good place to configure and extend Tapestry, or to place your own
 * service definitions.
 */
public class AppModule {

     public static final String URL_LOGIN = "/sec/Login";
     public static final String URL_SUCCESS = "/Index";
     public static final String URL_UNAUTHORIZED = "/sec/AccessDenied";

	/**
	 * Make bind() calls on the binder object to define most IoC services. Use
	 * service builder methods (example below) when the implementation is
	 * provided inline, or requires more initialization than simply invoking the
	 * constructor
	 * 
	 * @param pBinder
	 *            to use
	 */
	 public static void bind(final ServiceBinder pBinder) {
            // This next line addresses an issue affecting GlassFish and JBoss - see http://blog.progs.be/?p=52
            javassist.runtime.Desc.useContextClassLoader = true;
            pBinder.bind(UserDAO.class, UserDAOImpl.class);

	 }
	
	// Tell Tapestry how to handle JBoss 7's classpath URLs - JBoss uses a "virtual file system".
	// See "Running Tapestry on JBoss" in http://wiki.apache.org/tapestry/Tapestry5HowTos .

	 @SuppressWarnings("rawtypes")
	 public static void contributeServiceOverride(MappedConfiguration<Class, Object> configuration) {
	 	    configuration.add(ClasspathURLConverter.class, new ClasspathURLConverterJBoss7());
	 }

	/**
	 * AOP adviser for @LOG annotation, which we want to have for all service
	 * and dao methods. This means that it will log the entry parameters and
	 * exit parameters as debug log which is usefull for debugging purposes.and
	 * we do not need to specify in each method a log statement.
	 * 
	 * @param pLoggingAdvisor
	 *            LoggingAdvisor
	 * @param pLogger
	 *            slf4j with log4j logger.
	 * @param pReceiver
	 *            MethodAdviceReceiver
	 */
	 @Match({ "*Service*", "*Dao*" })
	 public static void adviseLogging(final LoggingAdvisor pLoggingAdvisor,
                                     final Logger pLogger,
                                     final MethodAdviceReceiver pReceiver) {
		    pLoggingAdvisor.addLoggingAdvice(pLogger, pReceiver);
	 }

	/**
	 * @param pConfiguration
	 *            to use
	 */
	 public static void contributeApplicationDefaults(final MappedConfiguration<String, Object> pConfiguration) {
            // Contributions to ApplicationDefaults will override any contributions
            // to
            // FactoryDefaults (with the same key). Here we're restricting the
            // supported
            // locales to just "en" (English). As you add localised message catalogs
            // and other assets,
            // you can extend this list of locales (it's a comma separated series of
            // locale names;
            // the first locale name is the default when there's no reasonable
            // match).
            pConfiguration.add(SymbolConstants.SUPPORTED_LOCALES, "en");
            pConfiguration.add(SymbolConstants.MINIFICATION_ENABLED, false);
            pConfiguration.add(SymbolConstants.HMAC_PASSPHRASE,"a1TAzRnjBZRKubgwSRlpX");
            pConfiguration.add(ResteasySymbols.MAPPING_PREFIX, "/api");


            pConfiguration.add(SymbolConstants.SECURE_ENABLED, "false");
            pConfiguration.add(SymbolConstants.HOSTPORT, "8080");
            pConfiguration.add(SymbolConstants.HOSTPORT_SECURE, "8443");

            // Tynamo's tapestry-security module configuration
            pConfiguration.add(SecuritySymbols.LOGIN_URL, URL_LOGIN);
            pConfiguration.add(SecuritySymbols.SUCCESS_URL, URL_SUCCESS);
            pConfiguration.add(SecuritySymbols.UNAUTHORIZED_URL, URL_UNAUTHORIZED);

            pConfiguration.add(SymbolConstants.PRODUCTION_MODE,false);
            pConfiguration.add(SymbolConstants.START_PAGE_NAME,"Start");
            
            pConfiguration.add(SymbolConstants.COMBINE_SCRIPTS, false);
            pConfiguration.add(SymbolConstants.COMPRESS_WHITESPACE, false);    
            pConfiguration.add(SymbolConstants.GZIP_COMPRESSION_ENABLED, false);
            
            pConfiguration.add(SymbolConstants.JAVASCRIPT_INFRASTRUCTURE_PROVIDER, "jquery");

	 }
	 
   @Contribute(Compatibility.class)
   public static void disableBackwardsCompatibleFeatures(MappedConfiguration<Trait, Boolean> configuration){
		        configuration.add(Trait.INITIALIZERS, false);
   }

    public static final String PERMISSION_ADMIN = "adminPermission:1";

    // Security - Tynamo/Shiro
    // http://tapestry.apache.org/https.html#HTTPS-SecuringMultiplePages
    public void contributeMetaDataLocator(MappedConfiguration<String, String> configuration)
    {
        // Enabling @Secure only on some pages (the remaining ones are insecure)
        configuration.add("admin:" + MetaDataConstants.SECURE_PAGE, "true");
    }

    public static void contributeWebSecurityManager(Configuration<Realm> configuration) {
        ExtendedPropertiesRealm realm = new ExtendedPropertiesRealm("classpath:shiro-users.properties");
        configuration.add(realm);
    }

	/**
	 * @param pConfiguration
	 *            to use
	 */
     public static void contributeResponseCompressionAnalyzer(final Configuration<String> pConfiguration) {
		    pConfiguration.add("application/json");
	 }
	

	 public static void contributeComponentClassResolver(Configuration<LibraryMapping> configuration)
	 {
	        configuration.add(new LibraryMapping("angular", "dev.openshift.tapestry.angular2"));
	 }
	

	    
	 public static void contributeClasspathAssetAliasManager(MappedConfiguration<String, String> configuration)
	 {
	        configuration.add("tap-angular", "dev/openshift/tapestry");
	 }

     public static void contributeResteasyPackageManager(Configuration<String> configuration)
     {
            configuration.add("dev.openshift.tapestry.angular2.ws");
     }


     public static void contributeIgnoredPathsFilter(Configuration<String> configuration)
     {
            configuration.add("/partials/*");
     }

     @Match("*DAO")
     public static <T> T decorateTransactionally(HibernateTransactionDecorator decorator, Class<T> serviceInterface,
                                                T delegate, ServiceResources resources)
     {
        return decorator.build(serviceInterface, delegate, resources.getServiceId());
     }

     //http://apache-tapestry-mailing-list-archives.1045711.n5.nabble.com/Tapestry-Tynamo-Rest-and-security-integration-questions-td5714525.html
     public static void contributeHttpServletRequestHandler(
            @InjectService("SecurityConfiguration") HttpServletRequestFilter securityConfiguration,
            OrderedConfiguration<HttpServletRequestFilter> filters)
     {
        filters.override("SecurityConfiguration", securityConfiguration, "before:ResteasyRequestFilter,after:StoreIntoGlobals");
     }
}
