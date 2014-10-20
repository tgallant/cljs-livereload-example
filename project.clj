(defproject example "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  
  :jvm-opts ^:replace ["-Xmx1g" "-server"]
  
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2371"]]
  
  :plugins [[lein-cljsbuild "1.0.3"]]
  
  :source-paths ["src/"]
  :resource-paths ["resources"]
  
  :cljsbuild {
              :builds [{:id "dev"
                        :source-paths ["src/"]
                        :compiler {
                                   :output-to "resources/public/scripts/main.js"
                                   :output-dir "resources/public/scripts/out"
                                   :optimizations :none
                                   :source-map true}}]})
